import React, { useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import TableWrapper from '../TableWrapper';

import { ReactComponent as IconLaudo } from '../../assets/laudo.svg';
import { ReactComponent as IconDownload } from '../../assets/download.svg';
import { ReactComponent as IconDelete } from '../../assets/erase.svg';
import { ReactComponent as IconEdit } from '../../assets/edit.svg';

// const user = localStorage.getItem('user')

export default function ListaLaudo() {
  const [reports, setReports] = React.useState([]);

  useEffect(() => {
    async function loadReports() {
      const response = await api.get('/55/reports');
      setReports(response.data);
    }
    loadReports();
  }, []);

  return (
    <div className="dash-container" style={{ paddingBottom: '30px' }}>
      <h2 className="title">Laudos</h2>
      <TableWrapper />
    </div>
  );
}
