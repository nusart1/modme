import React, { useState } from 'react';
import '../firstsection/firstsection.css';
import Img from '../../assetts/it_tat.png';
import {
  FaLandmark, FaChalkboardTeacher, FaServer,
  FaUserFriends, FaLayerGroup, FaExclamationCircle
} from 'react-icons/fa';

function FirstSection() {
  const [showServerSettings, setShowServerSettings] = useState(false);
  const [showTeachersPanel, setShowTeachersPanel] = useState(false);
  const [showSubjectInfo, setShowSubjectInfo] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');

  const [teachers, setTeachers] = useState([
    {
      firstName: "Sayorbek",
      lastName: "Holikov",
      phone: "+998901234567",
      gender: "Erkak",
      email: "sayorbekholikov@gmail.com",
      age: 20,
      subject: "Frontend",
      groups: 3,
      studentsCount: 30
    },
    {
      firstName: "Shaxzod",
      lastName: "Muradov",
      phone: "+998901112233",
      gender: "Erkak",
      email: "shaxzodmuradov@gmailcom",
      age: 27,
      subject: "Frontend",
      groups: 4,
      studentsCount: 36
    },
    // Add more teachers...
  ]);

  const [newTeacher, setNewTeacher] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "Erkak",
    email: "",
    age: "",
    subject: "",
    groups: 0,
    studentsCount: 0
  });

  const handleSaveSettings = () => {
    alert('Sozlamalar saqlandi!');
    setShowServerSettings(false);
  };

  const text = {
    English: {
      title: 'IT TAT',
      schedule: "Today's Schedule",
      login: 'Change Login:',
      password: 'Change Password:',
      language: 'Language:',
      theme: 'Theme:',
      save: 'Save Settings',
      teachers: 'Teachers List',
      add: 'Add',
      teacherForm: {
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone',
        gender: 'Gender',
        email: 'Email',
        age: 'Age',
        subject: 'Subject',
        groups: 'Groups',
        students: 'Students'
      },
      subjectStats: 'Subject Statistics'
    },
    "O‘zbek": {
      title: 'IT TAT',
      schedule: 'Bugungi Dars Jadvali',
      login: 'Loginni o‘zgartirish:',
      password: 'Parolni o‘zgartirish:',
      language: 'Til:',
      theme: 'Mavzu:',
      save: 'Sozlamalarni saqlash',
      teachers: 'O‘qituvchilar Ro‘yxati',
      add: 'Qo‘shish',
      teacherForm: {
        firstName: 'Ism',
        lastName: 'Familiya',
        phone: 'Telefon',
        gender: 'Jins',
        email: 'Email',
        age: 'Yosh',
        subject: 'Fan',
        groups: 'Guruhlar',
        students: 'O‘quvchilar'
      },
      subjectStats: 'Fanlar Statistikasi'
    },
    Русский: {
      title: 'IT TAT',
      schedule: 'Расписание на сегодня',
      login: 'Изменить логин:',
      password: 'Изменить пароль:',
      language: 'Язык:',
      theme: 'Тема:',
      save: 'Сохранить настройки',
      teachers: 'Список преподавателей',
      add: 'Добавить',
      teacherForm: {
        firstName: 'Имя',
        lastName: 'Фамилия',
        phone: 'Телефон',
        gender: 'Пол',
        email: 'Email',
        age: 'Возраст',
        subject: 'Предмет',
        groups: 'Группы',
        students: 'Студенты'
      },
      subjectStats: 'Статистика по предметам'
    }
  };

  const currentText = text[language];

  const ItTat = [
    { icon: <FaUserFriends size={40} color="blue" />, text: "Active leads", number: 30 },
    { icon: <FaUserFriends size={40} color="blue" />, text: "Active students", number: 91 },
    { icon: <FaLayerGroup size={40} color="blue" />, text: "Groups", number: 26 },
    { icon: <FaExclamationCircle size={40} color="blue" />, text: "Error count", number: 64 },
    { icon: <FaUserFriends size={40} color="blue" />, text: "Active leads", number: 30 },
    { icon: <FaUserFriends size={40} color="blue" />, text: "Active students", number: 91 },
    { icon: <FaLayerGroup size={40} color="blue" />, text: "Groups", number: 26 },
    { icon: <FaExclamationCircle size={40} color="blue" />, text: "Error count", number: 64 },
    { icon: <FaUserFriends size={40} color="blue" />, text: "Active leads", number: 30 },
    { icon: <FaUserFriends size={40} color="blue" />, text: "Active students", number: 91 }
  ];

  const [schedule, setSchedule] = useState([
  { room: "Room 1", time: "09:00 - 10:30", teacher: "Sayorbek Holikov" },
  { room: "Room 2", time: "10:45 - 12:15", teacher: "Shaxzod Muradov" }
]);


  const handleClick = () => {
    setShowTable(true);
  };
  const addTeacherToSchedule = (teacher) => {
  const newEntry = {
    room: `Room ${schedule.length + 1}`,
    time: "16:00 - 17:30", // bu vaqtni siz xohlagancha sozlashingiz mumkin
    teacher: `${teacher.firstName} ${teacher.lastName}`
  };

  setSchedule([...schedule, newEntry]);
};


  return (
    <div className={`firstsection ${theme === 'Dark' ? 'dark-theme' : ''}`}>
      <div className="Sidebar">
        <div className="sidebar-content">
          <img src={Img} alt="Logo" />
          <FaLandmark size={40} color="grey" onClick={() => setShowSubjectInfo(true)} style={{ cursor: 'pointer' }} />
          <FaChalkboardTeacher size={40} color="grey" onClick={() => setShowTeachersPanel(true)} style={{ cursor: 'pointer' }} />
          <FaServer size={40} color="grey" onClick={() => setShowServerSettings(true)} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <div className="main-content">
        <div className="header-top">
          <h3>IT TAT</h3>
          <p>+</p>
          <input type="text" placeholder="Search" />
        </div>

        <div className="main">
          <div className="main-top">
            <h1>{currentText.title}</h1>
          </div>

          <div className="itTat-stats">
            {ItTat.map((item, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{item.icon}</div>
                <div className="stat-text">
                  <h4>{item.text}</h4>
                  <p>{item.number}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="schedule-table">
            <button 
  onClick={handleClick} 
  style={{
    backgroundColor: '#333', 
    color: '#fff', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
  
>
  Jadvalni ko‘rsatish
</button>


            {showTable && (
              <>
                <h2>{currentText.schedule}</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Room</th>
                      {schedule.map((item, index, t) => (
                        <th key={index}>{item.room}</th>
                      ))}
                    </tr>
                    <tr>
                      <th>Time</th>
                      {schedule.map((item, index) => (
                        <th key={index}>{item.time}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Teacher</td>
                      {schedule.map((item, index, t) => (
                        <td key={index}>{item.teacher}</td>

                      ))}
                    </tr>
                    
                  </tbody>
                </table>
              </>
              
            )}
            {/* {teachers.map((t, index) => (
                <div key={index} className="subject-item">
                  <h3>📘 {t.subject}</h3>
                  <p>👥 {currentText.teacherForm.groups}: {t.groups}</p>
                  <p>🎓 {currentText.teacherForm.students}: {t.studentsCount}</p>
                  <p>🎓 {currentText.teacherForm.firstName}: {t.firstName}</p>
                  <p>🎓 {currentText.teacherForm.lastName}: {t.lastName}</p>
                </div>
              ))} */}
          </div>
        </div>
      </div>

      {/* Subject Info Panel */}
      {showSubjectInfo && (
        <div className={`subject-info-panel ${theme === 'Dark' ? 'dark' : ''}`}>
          <div className="panel-box">
            <div className="panel-header">
              <h2>{currentText.subjectStats}</h2>
              <button className="close-btn" onClick={() => setShowSubjectInfo(false)}>✕</button>
            </div>
            <div className="subject-list">
              {teachers.map((t, index) => (
  <div key={index} className="subject-item">
    <h3>📘 {t.subject}</h3>
    <p>👥 {currentText.teacherForm.groups}: {t.groups}</p>
    <p>🎓 {currentText.teacherForm.students}: {t.studentsCount}</p>
    <p>🎓 {currentText.teacherForm.firstName}: {t.firstName}</p>
    <p>🎓 {currentText.teacherForm.lastName}: {t.lastName}</p>
    
  </div>
))}

            </div>
          </div>
        </div>
      )}

      {/* Teachers Panel */}
      {showTeachersPanel && (
        <div className="teachers-panel">
          <div className="panel-header">
            <h2>{currentText.teachers}</h2>
            <button className="close-btn" onClick={() => setShowTeachersPanel(false)}>✕</button>
            <button className="add-btn" onClick={(t) => {
              addTeacherToSchedule(t);
              setTeachers([...teachers, newTeacher]);
              setNewTeacher({
                firstName: "",
                lastName: "",
                phone: "",
                gender: "Erkak",
                email: "",
                age: "",
                subject: "",
                groups: 0,
                studentsCount: 0
              });
            }}>{currentText.add}</button>
          </div>

          <div className="teacher-form">
            <input placeholder={currentText.teacherForm.firstName} value={newTeacher.firstName} onChange={e => setNewTeacher({ ...newTeacher, firstName: e.target.value })} />
            <input placeholder={currentText.teacherForm.lastName} value={newTeacher.lastName} onChange={e => setNewTeacher({ ...newTeacher, lastName: e.target.value })} />
            <input placeholder={currentText.teacherForm.phone} value={newTeacher.phone} onChange={e => setNewTeacher({ ...newTeacher, phone: e.target.value })} />
            <select value={newTeacher.gender} onChange={e => setNewTeacher({ ...newTeacher, gender: e.target.value })}>
              <option>Erkak</option>
              <option>Ayol</option>
            </select>
            <input placeholder={currentText.teacherForm.email} value={newTeacher.email} onChange={e => setNewTeacher({ ...newTeacher, email: e.target.value })} />
            <input placeholder={currentText.teacherForm.age} type="number" value={newTeacher.age} onChange={e => setNewTeacher({ ...newTeacher, age: e.target.value })} />
            <input placeholder={currentText.teacherForm.subject} value={newTeacher.subject} onChange={e => setNewTeacher({ ...newTeacher, subject: e.target.value })} />
            <input placeholder={currentText.teacherForm.groups} type="number" value={newTeacher.groups} onChange={e => setNewTeacher({ ...newTeacher, groups: e.target.value })} />
            <input placeholder={currentText.teacherForm.students} type="number" value={newTeacher.studentsCount} onChange={e => setNewTeacher({ ...newTeacher, studentsCount: e.target.value })} />
          </div>

          <div className="teachers-list">
            {teachers.map((t, index) => (
              <div key={index} className="teacher-item">
                <p><strong>{t.firstName} {t.lastName}</strong></p>
                <p>📞 {t.phone}</p>
                <p>👤 {t.gender}</p>
                <p>✉️ {t.email}</p>
                <p>🎂 {t.age} yosh</p>
                <p>📘 {t.subject}</p>
                <button onClick={() => addTeacherToSchedule(t)}>Jadvalga qo‘shish</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showServerSettings && (
        <div className="server-settings-panel">
          <div className="server-settings-content">
            <button className="close-btn" onClick={() => setShowServerSettings(false)}>✕</button>
            <h2>Server Settings</h2>
            <div className="setting-item">
              <label>{currentText.login}</label>
              <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div className="setting-item">
              <label>{currentText.password}</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="setting-item">
              <label>{currentText.language}</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option>English</option>
                <option>O‘zbek</option>
                <option>Русский</option>
              </select>
            </div>
            <div className="setting-item">
              <label>{currentText.theme}</label>
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
            <div className="setting-item">
              <button className="save-btn" onClick={handleSaveSettings}>{currentText.save}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstSection;
