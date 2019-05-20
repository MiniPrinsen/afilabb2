import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const AdTableHead = () => {
    const CustomTableCell = withStyles(theme => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
        }))(TableCell);
    
    return (
        <React.Fragment>
            <TableHead>
                <TableRow>
                <CustomTableCell>Rubrik</CustomTableCell>
                <CustomTableCell>Innehåll</CustomTableCell>
                <CustomTableCell>Pris</CustomTableCell>
                <CustomTableCell>Annonspris</CustomTableCell>
                <CustomTableCell>Annonsör</CustomTableCell>
                <CustomTableCell>Id</CustomTableCell>
                </TableRow>
            </TableHead> 
        </React.Fragment>
    );
}
export default AdTableHead