import { React, useState, useEffect } from "react";
import Flashcard from "../components/Flashcard";
import axios from "axios";

export default function ListCards() {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("./flashcards.json");
            setFlashcards(response.data);
        }
        fetchData();
    }, [])
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Manage Flashcards</h2>
                <button className="btn btn-success">Add New</button>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {flashcards.map((flashcard) => (
                    <div className="col" key={flashcard.id}>
                        <Flashcard front={flashcard.front} back={flashcard.back} />
                    </div>
                ))}
            </div>
        </>
    );
}