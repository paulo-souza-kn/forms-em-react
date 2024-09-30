import "./MyForm.css"
import {useState} from 'react'

const MyForm = ({user}) => {
    const [name,setName] = useState(user ? user.name:'');
    const [email,setEmail] = useState(user ? user.email:'');
    const [bio, setBio] = useState(user ? user.bio:'');
    const [role,setRole] = useState(user ? user.role:'');

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name);
    // console.log(email);

    //Enviando formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário")
        console.log(name,email,bio,role);

        //Limpar form
        setName("");
        setEmail("");
        setBio("");
    };

    return(
        <div>
            <h3>
            My form
            </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
                </div>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <label>
                    <span>Função</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                        
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
};
export default MyForm;