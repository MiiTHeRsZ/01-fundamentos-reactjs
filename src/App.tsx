import styles from './App.module.css'

import './global.css'

import { Header } from './components/Header.tsx'
import { Post, PostType } from './components/Post.tsx'
import { Sidebar } from './components/Sidebar.tsx'

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/miithersz.png',
            name: 'Gustavo Leme',
            role: 'Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' }
        ],
        publishedAt: new Date('2024-07-22 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/kinodesu.png',
            name: 'Leonardo',
            role: 'Infra'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' }
        ],
        publishedAt: new Date('2024-07-12 20:00:00')
    }
]

function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar></Sidebar>
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </>
    )
}

export default App
