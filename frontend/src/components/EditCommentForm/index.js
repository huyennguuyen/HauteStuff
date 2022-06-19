


export default function CommentForm () {

    return (
        <>
            <div className="firstContainer">
                <div className="outsideEdit">
                    <form onSubmit={submitting} className="forms" id="editForm"> 
                    <ul>
                        {hasSubmitted && errors.map((error, idx) => (
                            <li key={idx}>
                                {error}
                            </li>
                        ))}
                    </ul>
                    <label>Image:</label>
                    <input type="file" onChange={updateFile}/>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button className="editSubmit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}