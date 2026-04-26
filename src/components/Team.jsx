import { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Team() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
        setIsLoading(false);
        if (searchInputRef.current) searchInputRef.current.focus();
      })
      .catch((err) => console.error("Failed to fetch members:", err));
  }, []);

  const isDarkMode = useContext(ThemeContext);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="team-container">
      <p className="title-members-container">Find members for your route 🔍</p>
      <input
        className={`searching-member-container ${isDarkMode ? "dark" : ""}`}
        type="text"
        placeholder="Searching by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={searchInputRef}
      />
      <div className="members-container">
        {isLoading
          ? "Looking for members..."
          : filteredMembers.map((member) => (
              <div
                className={`member-card-container ${isDarkMode ? "dark" : ""}`}
                key={member.id}
              >
                <div className="member-avatar-side">
                  <img
                    src={`https://ui-avatars.com/api/?name=${member.name}&background=9BE1E3&color=213547&size=150`}
                    alt={member.name}
                    className="member-avatar"
                  />
                </div>
                <div className="member-info">
                  <div>
                    <h3 className="name-container">{member.name}</h3>
                    <span
                      className={`email-container ${isDarkMode ? "dark" : ""}`}
                    >
                      {member.email.toLowerCase()}
                    </span>
                    <div
                      className="badges-container"
                      style={{ marginTop: "15px" }}
                    >
                      <span className="badge member-city">
                        📍 {member.address.city}
                      </span>
                      <span className="badge member-company">
                        💼 {member.company.name.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="card-footer-actions">
                    <button
                      className={`fav-button ${isDarkMode ? "dark" : ""}`}
                    >
                      ✉️ Invite to Trail
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
