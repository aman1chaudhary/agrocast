import React from 'react'
import CountUp from 'react-countup';

export const counterSection = [
    { icon: <i className="icon ti-bag" />, num: '4', title: 'Years in Business', },
    { icon: <i className="icon ti-user" />, num: '12', title: 'Happy Clients', },
    { icon: <i className="icon flaticon-users" />, num: '5', title: 'Technical Experts', },
    { icon: <i className="icon ti-mobile" />, num: '20', title: 'Number of Projects', },
];

const CounterSection = () => {
    return (
        <div className='counter_container'>
            <div className="row">
                {counterSection.map((data, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                        <div className="counter_style">
                            <div className="counter_icon">{data.icon}<span className="counter"><CountUp end={data.num} duration={4} />+</span></div>
                            <span className="counter_text">{data.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CounterSection