import React from 'react';

import SEO from '../seo/seo';
import Header from '../header/header';
import Footer from '../footer/footer';

import TruthTableContainer from '../truth-table-container/truth-table-container';

export default function Container () {
    return (
        <>
            <SEO />

            <section className="container mx-auto mt-8 px-8">
                <Header />

                <TruthTableContainer />

                <Footer />
            </section>
        </>
    );
}