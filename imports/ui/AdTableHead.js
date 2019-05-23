import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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