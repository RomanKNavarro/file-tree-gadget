import React, { useState } from 'react'; 

function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="nutBeGone.mp4"/>
        <File name="express_file.mp4"/>
      </Folder>
      <File name="dogs.png"/>
      <File name="cats.png"/>
    </Folder>
    <Folder name="Applications"/>
  </div>
}

const Folder = (props) => {
  // console.log(props)...FOR THE MUSIC FOLDER RENDERED, THIS WILL RETURN: {NAME: "MUSIC", CHILDREN: ARRAY(2)}
  const [ isOpen, setIsOpen ] = useState(true);
  const { name, children } = props;               
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={handleClick}>
      {/* CALL THIS FUNC WHEN FOLDER IS CLICKED. "CLASSNAME" USED BECAUSE "CLASS" IS RESERVED FOR SOMETHING ELSE IN REACT */}
      <i className="blue folder icon"></i>	  
      <i className={`caret ${direction} icon`}></i>
      {/* IMPORTANT: THESE CLASS NAMES ARE FROM "SEMANTIC UI ICONS". IT IS SUPER EASY TO GET THEM. ON THE WEBSITE, SEARCH UP WHICH IMAGE YOU WANT, AND
        THAT WILL IMMEDIATELY COPY IT'S TAG TO THE KEYBOARD, LIKE "<i class="folder outline icon"></i>". THIS IS SO MUCH MORE CONVINIENT THAN HAVING TO 
        INSPECT THE IMAGE LIKE IN THE VIDEO. */}

    </span>
    {name}

    <div style={{ marginLeft: '17px' }}>  
      {isOpen ? children : null}		{/* OPEN IF "ISOPEN" IS TRUE. CLOSE OTHERWISE  */}
      {/* MORE IMPORTANT SHIT: HERE'S WHAT INDENTS FOLDER'S CONTENTS TO THE RIGHT. THE "CHILDREN" ARE OTHER FILE/FOLDER COMPONENTS INSIDE THE PARENT.*/}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];   // GETS EXTENSION NAME OF THE FILE NAME (IN THE PROPS), LIKE "MP4"
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline'   
    // TO GET THESE NAMES, ON THE WEBSITE, YOU'LL HAVE TO MANUALLY INSPECT THE IMAGE AND DIG DEEP IN IT'S HTML UNTIL YOU COME ACROSS SOMETHING LIKE:
    // <i class="file image icon"></i>. THE CLASS NAME IS WHAT YOU WANT. 
  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>  {/* HERE'S WHAT ACTUALLY RENDERS THE COOL IMAGES */}
    {name}
  </div>
};

export default App;
// THE WEBPAGE REFRESHES WHEN FILE IS SAVED, SO CHANGES CAN BE VIEWED IMMEDIATELY
// IN REACT, THIS FUNCTION IS CALLED A "COMPONENT", WHICH IS A JS FUNCTION THAT RENDERS THINGS ON SCREEN
// A REACT COMPONENT IS JUST A PLAIN JS FUNC THAT RENDERS HTML