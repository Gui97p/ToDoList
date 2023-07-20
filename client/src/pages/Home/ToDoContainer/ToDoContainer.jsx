import React from 'react';
import './ToDoContainer.css';
import ToDoCard from '../ToDoCard/ToDoCard';

function ToDoContainer() {
    return ( 
        <section className="container_to-do">
            <ToDoCard title={'Super título 123'} description={'Descrição do bagui tlgd, isso aq é pra funfar certinhamente'}/>
            <ToDoCard title={'Super título 123'} description={'Descrição do bagui tlgd, isso aq é pra funfar certinhamente'}/>
            <ToDoCard title={'Super título 123'} description={'Descrição do bagui tlgd, isso aq é pra funfar certinhamente'}/>
            <ToDoCard title={'Super título 123'} description={'Descrição do bagui tlgd, isso aq é pra funfar certinhamente'}/>
            <ToDoCard title={'Super título 123'} description={'Descrição do bagui tlgd, isso aq é pra funfar certinhamente'}/>
            <ToDoCard title={'Super título 123'} description={'Descrição do bagui tlgd, isso aq é pra funfar certinhamente'}/>
        </section>
    );
}

export default ToDoContainer;
