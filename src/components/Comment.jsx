import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ content, author, publishedAt, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/miithersz.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Leme</strong>
                            <time title="20 de julho de 2024" dateTime="2024-07-20 19:15:00">Cerca de 1h atrás</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentário'
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}