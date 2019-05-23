import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const Ad = (props) => {
    return (
        <React.Fragment>
            <TableRow>
              <CustomTableCell component="th" scope="row">{props.ad.ad_rubrik}</CustomTableCell>
              <CustomTableCell align="right">{props.ad.ad_varans_pris}</CustomTableCell>
              <CustomTableCell align="right">{props.ad.ad_innehall}</CustomTableCell>
              <CustomTableCell align="right">{props.ad.ad_pris}</CustomTableCell>
            </TableRow>
        </React.Fragment>
    )
}
export default Ad