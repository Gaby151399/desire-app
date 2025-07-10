import { useEffect, useState } from "react"
import Users from "../data/user.json"

export default function Homepage() {
    const [count, setCount] = useState(0);
    const [userList, setUserList] = useState([]);
    const [form, setForm] = useState({
        lastname: "",
        firstname: "",
        email: "",
        role: ""
    });
    const [loading, setLoading] = useState(false);


    const handleIncrement = () => {
        if (count === 10) return;

        setCount(count + 1);
    };

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setUserList(Users.users);
            setLoading(false);
        }, 3000);
    }, [])

    const handleCreateUser = (e) => {
        e.preventDefault();

        const newUser = {
            id: userList.length + 1,
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            role: form.role,
        };

        setUserList([...userList, newUser]);

        setForm({
            lastname: "",
            firstname: "",
            email: "",
            role: ""
        })
    }

    return (
        <div >
            Home page
            <button style={ { border: "none", marginLeft: 20, padding: 5 } } onClick={ handleIncrement }>
                { count }
            </button>

            <div style={ { display: "flex", justifyContent: "space-around", width: "100%" } }>
                <ul className="list-group mt-5" style={ { height: "80vh", overflowY: "auto" } }>
                    { loading ?
                        <div>Chargement ...</div>
                        :
                        userList.map((user) => (
                            <li key={ user.id } className="list-group-item">
                                <span>{ user.firstname }</span>
                                <br />
                                <span>{ user.email }</span>
                            </li>
                        ))
                    }
                </ul>

                <form onSubmit={ handleCreateUser } className=" mt-4">
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">Prénom</label>
                        <input type="text" className="form-control" id="firstname" value={ form.lastname } onChange={ (e) => setForm({ ...form, lastname: e.target.value }) } />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="lastname" value={ form.firstname } onChange={ (e) => setForm({ ...form, firstname: e.target.value }) } />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={ form.email } onChange={ (e) => setForm({ ...form, email: e.target.value }) } />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Rôle</label>
                        <select className="form-select" id="role" value={ form.role } onChange={ (e) => setForm({ ...form, role: e.target.value }) } >
                            <option value="">Sélectionner un rôle</option>
                            <option value="Développeur">Développeur</option>
                            <option value="Designer">Designer</option>
                            <option value="Manager">Manager</option>
                            <option value="Support">Support</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={ !form.firstname || !form.lastname || !form.email || !form.role}>Créer l'utilisateur</button>
                </form>

            </div>
        </div >
    )
}