import { useState, useEffect, useRef, useContext} from "react";
import { ThemeContext } from "./ThemeContext";

export default function Team(){
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const searchInputRef = useRef(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data=>{
            setMembers(data);
            setIsLoading(false);
            searchInputRef.current.focus();
        })
    },[])

    const isDark = useContext(ThemeContext);

    const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return(
        <div className="team-container">
            <p className="title-members-container">Find members for your route 🔍</p>
            <input 
            className={`searching-member-container ${isDark? "dark" : ""}`} 
            type="text"
            placeholder="Searching by name..." 
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            ref={searchInputRef}
            />
            <div className="members-container">
                {isLoading? 
            "Looking for members...":
            filteredMembers.map((member)=>(
                <div key={member.id} className="member-card-container">
                    <div className="name-container">{member.name}</div>
                <div className={`email-container ${isDark? "dark" : ""}`}>Email: {member.email}</div>
                </div>
                
            ))
            }
            </div>
            

        </div>
    )

}