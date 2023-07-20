import React from 'react';
import './Home.css';
// import Form from './Form/Form';
// import ToDoContainer from './ToDoContainer/ToDoContainer';
import NoAccount from './NoAccount/NoAccount';

function Home() {
    return ( 
        <section className="page_home">
            <NoAccount />
            {/* <section className="area_to-do">
                <Form />
                <ToDoContainer />
            </section> */}
        </section>
    );
}

export default Home;
