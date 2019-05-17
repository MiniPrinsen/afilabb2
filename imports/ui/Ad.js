import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// export default class Ad extends Component {
//     render() {
//         return (
//             <li>{this.props.ad.ad_rubrik}</li>
//         )
//     }
// }

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