import React from 'react';
import Wrapper from '../assets/wrappers/StatsContainer';
import WrapperItem from '../assets/wrappers/StatItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

const StatsContainer = () => {
    let { stats } = useSelector(store => store.allJobs)
    console.log(stats);
    const defaultStats = [
        {
            title: 'pending applications',
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: '#e9b949',
            bcg: '#fcefc7',
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: '#647acb',
            bcg: '#e0e8f9',
        },
        {
            title: 'jobs declined',
            count: stats.declined || 0,
            icon: <FaBug />,
            color: '#d66a6a',
            bcg: '#ffeeee',
        },
    ];
    return (
        <Wrapper>
            {
                defaultStats.map((item, index) => {
                    let { title, count, icon, color, bcg } = item
                    return < WrapperItem key={index} color={color} bcg={bcg} >
                        <header>
                            <span className="count">{count}</span>
                            <span className="icon">{icon}</span>
                        </header>
                        <h5 className="title">{title}</h5>
                    </WrapperItem>
                })
            }

        </Wrapper >
    );
}

export default StatsContainer;
