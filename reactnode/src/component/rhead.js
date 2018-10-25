import React, {
  Component
} from 'react';
import { Input } from 'antd';
class rhead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headInfo: ''
    };
  }
  componentDidMount() {

  }
  render() {
    console.log(this.props.headInfo)
    return (
      <div className="rhead">
        <header className="rhead-header">
          {this.props.headInfo}
        </header>
      </div>
    );
  }
  // render() {
  //   console.log(this.props.headInfo)
  //   return (
  //     <Input placeholder="Basic usage" />
  //   );
  // }
}
export default rhead;