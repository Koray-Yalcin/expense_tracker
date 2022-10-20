import { message } from 'antd';

const errors = (errorMessage: string) => {
    message.error(errorMessage);
  };

  export default errors;