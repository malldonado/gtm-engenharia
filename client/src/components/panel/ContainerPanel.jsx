import PanelUpload from "./PanelUpload";
import React, { useState } from 'react';
import PanelTable from "./PanelTable";
import PanelEditor from './PanelEditor';

function ContainerPanel() {
  const [content, setContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };
  return (
    <div className="w-[80%]">
      <div className="flex mt-[13px]">
        <PanelUpload/>
        {/* <PanelEditor initialValue={content} handleEditorChange={handleEditorChange} /> */}
      </div>
    </div>
  );
}

export default ContainerPanel;
