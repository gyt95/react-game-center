import React from 'react';

export var IntervalEnhance = ComposeComponent => class extends ComposeComponent {
    // 2
    static displayName = 'ComponentEnhancedWithIntervalHOC';

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }
    // 3
    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    // 3
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    render() {
        return (
            // 4
            <ComposeComponent {...this.props} {...this.state} />
        );
    }
}

export default IntervalEnhance;

//参考：http://www.jianshu.com/p/1eaa48067a86