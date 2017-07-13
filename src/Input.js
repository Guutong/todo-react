import React, { Component } from 'react';
import Panel from 'muicss/lib/react/panel';
export default class Input extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key !== 'Enter') return;

    const { onSubmit } = this.props;
    const { value } = this.state;

    if (!value) return; // Don't submit if empty

    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const styles = {
      input: {
        fontSize: '100%',
        padding: 15,
        width: '100%',
        border:0
      },
      flex : {
        display: 'flex',
        padding:0
      }
    };
    const { value } = this.state;

    return (
      <Panel style={styles.flex}>
        <input
          style={styles.input}
          type={'text'}
          value={value}
          placeholder={'Type a todo ...'}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </Panel>
    );
  }
}
