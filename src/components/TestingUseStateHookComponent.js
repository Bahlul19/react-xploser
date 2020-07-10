import React,{ useState }  from 'react';

const TestingUseStateHook = props => 
{
    const[phoneState, setPhoneState] = useState({
        phone : [
                {name : 'iphone', series : 'iphone11'},
                {name : 'nokia', series : 'xr'},
                {name : 'samsung', series : 'j7mx'},
                {name : 'huwai', series : 'prime'},
        ]
    });

    const clickHandler = () => {

    setPhoneState({
        phone : [
            {name : 'symphony', series : 'SJI'},
            {name : 'Walton', series : 'SYK'},
            {name : 'Redmi', series : 'creq'},
            {name : 'oppo', series : 'A7'},
    ]
    });
}
    

    return(
        <div>
            <button onClick={clickHandler}>Click Here</button>
            <h1>This is { phoneState.phone[0].name }</h1>
            <h2>Model is { phoneState.phone[1].series }</h2>
            <h3>This is { phoneState.phone[2].name }</h3>
            <h4>Model is { phoneState.phone[3].series }</h4>
        </div>
    )
}


export default TestingUseStateHook;