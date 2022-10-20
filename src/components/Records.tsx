import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { getRecords } from '../store/actions/recordActions';
import { Category } from '../types/category';
import { Record } from '../types/record';

function Records() {
    const {data, loading, error} = useSelector((state: AppState) => state.records);

    const columns= [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          render: (amount: Record['amount'], record: Record) => {
            return <>{Intl.NumberFormat('tr-TR').format(amount)}</>
          }
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (category: Category, record: Record) => {
                return <Tag color={category.color}>{category.name?.toUpperCase()}</Tag>
            }
        },
        {
          title: 'Action',
          key: 'action',
          render: (text: string, record: Record) => (
            <Space size="middle">
              <EditOutlined style={{color: 'blue'}} />
              <DeleteOutlined style={{color: 'red'}} />
            </Space>
          ),
        },
      ];

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getRecords());
      }, [])
  return (
    <Table loading={loading} columns={columns} dataSource={data}></Table>
  )
}

export default Records;