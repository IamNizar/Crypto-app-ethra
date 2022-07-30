import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const Loader = () => (
  
    <Spin indicator={antIcon} />

);

export default Loader;
