import React from 'react';
import Operator from 'src/routes/main/operator/operator';

import OperatorsStyle from './operators.css';

export default function Operators () {
    return (
        <div className={OperatorsStyle.operations}>
            <span>
                Negação:
                <Operator operator="¬" />
                <Operator operator="~" />
                <Operator operator="!" />
            </span>

            <span>
                Conjunção:
                <Operator operator="∧" />
                <Operator operator="&" />
                <Operator operator="*" />
            </span>

            <span>
                Disjunção:
                <Operator operator="∨" />
                <Operator operator="|" />
                <Operator operator="+" />
            </span>

            <span>
                Implicação:
                <Operator operator="→" />
                <Operator operator="⇒" />
                <Operator operator="->" />
            </span>

            <span>
                Equivalência:
                <Operator operator="↔" />
                <Operator operator="⇔" />
                <Operator operator="<->" />
            </span>
        </div>
    );
}
