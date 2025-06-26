import React from 'react'

function Clock() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
  
    return (
    <div className="flex justify-center items-center h-screen bg-gray-100"> 
      <h1 className="text-2xl font-bold">Current Time {time}</h1>
    </div>
  ) 
}

export default Clock
