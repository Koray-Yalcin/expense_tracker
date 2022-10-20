import { Form, Input, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { addCategory, deleteCategory, getCategories, updateCategory } from '../store/actions/categoryActions';
import { Category, CategoryForm } from '../types/category';
import { SketchPicker } from 'react-color';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function Categories() {
    const {data, loading, error} = useSelector((state: AppState) => state.categories);
    const columns: ColumnsType<any> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          render: (text: string, category: Category) => {
            return <Tag color={category.color}>{text?.toUpperCase()}</Tag>
          }
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text: string, category: Category) => (
            <Space size="middle">
              <EditOutlined style={{color: 'blue'}} onClick={() => {showModal('edit'); setForm(category);}} />
              <DeleteOutlined style={{color: 'red'}} onClick={() => {showModal('delete'); setDeleteId(category.id);}} />
            </Space>
          ),
        },
      ];
      
      const dataa: any[] = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    const dispatch = useDispatch(); 

     useEffect(() => {
        //dispatch(getCategories());
      }, [])
      
      const emptyForm: CategoryForm = {
        name: '',
        type: 'expense',
        color: 'black'
      }

      const [isModalOpen, setIsModalOpen] = useState(false);
       const [mode, setMode] = useState<Mode>("new");
       type Mode = "new" | "edit" | 'delete';
       const [form, setForm] = useState<CategoryForm>(emptyForm);
       const [deleteId, setDeleteId] = useState<number | null>(null);

      const showModal = (mode: Mode) => {
        console.log(mode)
        setIsModalOpen(true);
        setMode(mode);
      };

      const handleOk = () => {
        //dispatch(addCategory(form))
        // if(mode === 'new') dispatch(addCategory(form);)
        // else if (mode === 'edit') dispatch(updateCategory(form);)
        setIsModalOpen(false);
        setMode('new');
        setForm(emptyForm);
        if (mode === 'delete' && typeof deleteId === 'number') {
          //dispatch(deleteCategory(deleteId));
        }
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        setMode("new");
        setForm(emptyForm);
      };
    
  return (
    <React.Fragment>
      <div>
      <Button type="primary" onClick={() =>showModal('new')}>
        Open Modal
      </Button>
      
      <Modal title={mode === 'new' ? 'Create New Category' : 'Update Category'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {mode === 'delete' ? <>Are you sure?</> : null}
      <Form.Item label="Category Name">
        <Input name='name' value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
      </Form.Item>
      <Form.Item label="Category Type">
        <Select defaultValue={form.type} onChange={type => ({...form, type})}>
          <Select.Option value="income">Income</Select.Option>
          <Select.Option value="expense">Expense</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='Color'>
        <SketchPicker color={form.color} onChange={color => setForm({...form, color: color.hex})} />
      </Form.Item>
      
      </Modal>

      </div>
        <Table columns={columns} dataSource={dataa} />
    </React.Fragment>

  )
}

export default Categories;