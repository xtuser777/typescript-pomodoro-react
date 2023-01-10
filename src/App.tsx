import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';
function App() {
  return (
    <div className="container">
      <PomodoroTimer pomodoroTime={5} shortRestTime={2} longRestTime={3} cycles={4} />
    </div>
  );
}

export default App;
