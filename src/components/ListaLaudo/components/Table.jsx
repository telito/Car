import React from 'react';

import { ReactComponent as IconDownload } from '../../../assets/download.svg';
import { ReactComponent as IconDelete } from '../../../assets/erase.svg';
import { ReactComponent as IconEdit } from '../../../assets/edit.svg';
import { ReactComponent as IconLaudo } from '../../../assets/laudo.svg';

const index = ({ data }) => {
  const headers = ['', 'Rep', 'Oficio', 'Cidade', 'Orgão Solicitante', 'Ação'];

  return (
    <div>
      <table className="styled-table">
        <thead thead className="corner-left">
          <tr>
            {headers.map((el, index) => (
              <th key={index}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el}>
              <td>
                {' '}
                <IconLaudo />
              </td>
              <td>
                {' '}
                {el.rep}
              </td>
              <td>{el.office}</td>
              <td>{el.city_id}</td>
              <td>{el.type_inquiry_id}</td>
              <td>
                <div className="action-group">
                  <button className="btn-action edit"><IconEdit fill="#70AFE4" /></button>
                  <button className="btn-action download">
                    {' '}
                    <IconDownload fill="#C4C4C4" />
                  </button>
                  <button className="btn-action delete"><IconDelete fill="#DC3545" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default index;
