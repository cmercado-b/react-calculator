import React from 'react';

const Calculator = () => {
    const styleOperator = {
        height: '30px',
        color: '#4AF626',
        fontSize: '50px',
        border: '2px solid #efefef',
        borderRadius: '50%',
        cursor: 'pointer',
        textAlign: 'center',
        padding: '0 15px',
        margin: '5px',
    };

    const styleNumbers= {
        height: '30px',
        color: '#4AF626',
        fontSize: '50px',
        border: '2px solid #efefef',
        borderRadius: '50%',
        cursor: 'pointer',
        textAlign: 'center',
        padding: '0 19px',
        margin: '5px',
    };

    const styleCalculator = {
        textAlign: 'center',
        margin: '20px',
    };

    const containerStyle = {
        padding: '8px 0',
    };

    return (
        <div className="Calculator" style={styleCalculator}>
            <div className="operator" style={containerStyle}>
                <a onClick="" className="calculator-operator" style={styleOperator}>÷</a>
                <a className="calculator-operator" style={styleOperator}>×</a>
                <a className="calculator-operator" style={styleOperator}>−</a>
                <a className="calculator-operator" style={styleOperator}>+</a>
                <a className="calculator-operator" style={styleOperator}>=</a>
            </div>
            <div className="numbers" style={containerStyle}>
                <a onClick="" className="calculator-numbers" style={styleNumbers}>1</a>
                <a className="calculator-numbers" style={styleNumbers}>2</a>
                <a className="calculator-numbers" style={styleNumbers}>3</a>
                <a className="calculator-numbers" style={styleNumbers}>4</a>
                <a className="calculator-numbers" style={styleNumbers}>5</a>
            </div>
        </div>
    );
};

export default Calculator;