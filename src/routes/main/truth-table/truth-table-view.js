import React from 'react';

import {
    Table,
    Head,
    Header,
    Body,
    Row,
    Data,
} from 'src/components/table/table';

import Value from './value';

export default function TruthTableView ({
    matrix,
    expressions,
}) {
    return (
        <Table>
            <Head>
                <Row>
                    {expressions.map((expression, index) => (
                        <Header key={index}>
                            {expression.present()}
                        </Header>
                    ))}
                </Row>
            </Head>
            <Body>
                {matrix.map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        {row.map((value, dataIndex) => (
                            <Data key={dataIndex}>
                                <Value value={value} />
                            </Data>
                        ))}
                    </Row>
                ))}
            </Body>
        </Table>
    );
}
