import React from 'react';
import Operator from 'src/routes/main/operator/operator';

import OperatorsStyle from './operators.css';

export default function Operators () {
    return (
        <div className={OperatorsStyle.container}>
            <span className={OperatorsStyle.group}>
                Negação:
                <Operator operator="¬" />
                <Operator operator="~" />
                <Operator operator="!" />
            </span>

            <span className={OperatorsStyle.group}>
                Conjunção:
                <Operator operator="∧" />
                <Operator operator="&" />
                <Operator operator="*" />
            </span>

            <span className={OperatorsStyle.group}>
                Disjunção:
                <Operator operator="∨" />
                <Operator operator="|" />
                <Operator operator="+" />
            </span>

            <span className={OperatorsStyle.group}>
                Implicação:
                <Operator operator="→" />
                <Operator operator="⇒" />
                <Operator operator="->" />
            </span>

            <span className={OperatorsStyle.group}>
                Equivalência:
                <Operator operator="↔" />
                <Operator operator="⇔" />
                <Operator operator="<->" />
            </span>
        </div>
    );
}
