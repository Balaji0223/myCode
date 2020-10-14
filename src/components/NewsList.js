import React from 'react';

const NewsList = (props) => {
    const newsFeed = props.newsdata.map((data) => {
        return(
            <section key={data.id}>
                <div>
                <h2>{"Color is: " +data.color}</h2>
        <h4>{"Color Value is: " +data.value}</h4>
        <p>{data.text}</p>
                </div>
            </section>
        )
    })
    return(
        <div>
            {newsFeed}
        </div>
    )
}

export default NewsList