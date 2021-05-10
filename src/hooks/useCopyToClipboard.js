import { useState, useEffect } from 'react';

const useCopyToClipboard = (itemId, textToCopy, copiedItems, setCopiedItems) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyItem = () => {
        setCopiedItems(copiedItems => [...copiedItems, itemId]);
        navigator.clipboard.writeText(textToCopy);
    };

    useEffect(() => {
        if (copiedItems.includes(itemId)) {
            setIsCopied(true)
        } 
    }, [copiedItems, itemId]);

    return {isCopied, copyItem};

};

export default useCopyToClipboard;