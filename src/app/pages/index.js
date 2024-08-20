"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
        }
    };

    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.authButtons}>
                    <Link href="/signup" className={styles.authButton}>
                        Sign Up
                    </Link>
                    <Link href="/login" className={styles.authButton}>
                        Login
                    </Link>
                </div>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>My To-Do List</h1>

                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Enter a new task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className={styles.input}
                    />
                    <button onClick={addTask} className={styles.addButton}>
                        Add Task
                    </button>
                </div>

                <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.task}>
                            {task}
                            <button onClick={() => deleteTask(task)} className={styles.deleteButton}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
