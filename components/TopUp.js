import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class TopUp extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://obuat.ssogateway.points.com/SSOGateway/gateway.do?accountNumber='+this.props.navigation.state.params.memberId+'&balance='+this.props.navigation.state.params.balance+'&currencyCode=USD&email='+this.props.navigation.state.params.email+'&firstName='+this.props.navigation.state.params.firstName+'&languageCode=en-US&lastName='+this.props.navigation.state.params.lastName+'&membershipLevel=Gold&externalTxId=alaskainline156866661508773276&redemptionQuantity=25000&ssoProduct=buy&ssoSource=alaskainline&successURL=http%3A%2F%2Fforward.demo.com&transactionQuantity='+this.props.navigation.state.params.transactionQuantity }} style={{ marginTop: 20 }} />;
  }
}
