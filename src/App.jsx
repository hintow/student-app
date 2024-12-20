

import StudentList from './components/StudentList';

function App() {
    const studentData = [
        {
            id: 1,
            nameData: 'Ada',
            emailData: 'ada@dev.org',
            isPresentData: false,
        },
        {
            id: 2,
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org',
            isPresentData: false,
        },
        {
            id: 3,
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org',
            isPresentData: true,
        },
    ];

    return (
        <main>
            <h1>Attendance</h1>
            <StudentList students={studentData}></StudentList>
        </main>
    );
}

export default App;
