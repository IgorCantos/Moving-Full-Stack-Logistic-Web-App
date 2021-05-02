import React from 'react';
import propTypes from 'prop-types';
import { Table, TableWrapper } from './styles';

OrderTable.propTypes = {
    children: propTypes.node
}

function OrderTable(props) {
    return (
        <TableWrapper>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <strong>id</strong>
                        </th>
                        <th>
                            <strong>Status</strong>
                        </th>
                        <th>
                            <strong>Feito em</strong>
                        </th>
                        <th>
                            <strong>Origem</strong>
                        </th>
                        <th>
                            <strong>Destino</strong>
                        </th>
                        <th>
                            <strong>Comentário</strong>
                        </th>
                        <th>
                            <strong>Distância</strong>
                        </th>
                        <th>
                            <strong>Preço</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </Table>
        </TableWrapper>
    )
}

export default OrderTable;
