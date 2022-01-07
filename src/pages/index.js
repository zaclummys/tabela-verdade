import React from 'react';

import Metadata from '../components/metadata/metadata';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import TruthTableContainer from '../components/truth-table-container/truth-table-container';

export default function Index () {
    return (
        <>
            <Metadata />

            <section className="container mx-auto mt-8 px-8">
                <Header />

                <TruthTableContainer />

                <Footer />
            </section>
        </>
    );
}