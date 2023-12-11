import { useEffect, useRef } from 'react';

function useDragger(id: string, deleteItem: (idDeleted: string) => void): void {
  const isClicked = useRef<number>(0);
  const coords = useRef<{
    startX: number;
    startY: number;
  }>({
    startX: 0,
    startY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) throw new Error("Target with given id doesn't exist");
    const container = target.parentElement;
    if (!container) throw new Error('Element must have a parent');
    const trash = document.getElementById('apagar');
    if (!trash) throw new Error("Element with given id doesn't exist");

    const mouseDown = (e: MouseEvent) => {
      if (!isClicked.current) {
        target.style.border = '2px solid rgb(59, 152, 245)';
        isClicked.current = 1;
        trash.style.visibility = 'visible';
        return;
      }
      trash.style.visibility = 'hidden';
      if (isClicked.current === 2) {
        const bodyRect = container.getBoundingClientRect();
        coords.current.startX = bodyRect.left;
        coords.current.startY = bodyRect.top;
        target.style.top = `${
          e.clientY - coords.current.startY - (target.offsetHeight - 4) / 2
        }px`;
        target.style.left = `${
          e.clientX - coords.current.startX - (target.offsetWidth - 4) / 2
        }px`;
        target.style.border = 'none';
      }
      isClicked.current = 0;
    };

    const mouseDownContainer = (e: MouseEvent) => {
      if (!isClicked.current) return;
      if (isClicked.current === 1) {
        isClicked.current = 2;
      } else {
        const bodyRect = container.getBoundingClientRect();
        coords.current.startX = bodyRect.left;
        coords.current.startY = bodyRect.top;
        target.style.top = `${
          e.clientY - coords.current.startY - (target.offsetHeight - 4) / 2
        }px`;
        target.style.left = `${
          e.clientX - coords.current.startX - (target.offsetWidth - 4) / 2
        }px`;
        isClicked.current = 0;
        target.style.border = 'none';
        trash.style.visibility = 'hidden';
      }
    };

    const clickTrash = () => {
      if (!isClicked.current) return;
      deleteItem(id);
      trash.style.backgroundColor = 'inherit';
      trash.style.visibility = 'hidden';
    };

    target.addEventListener('mousedown', mouseDown);
    container.addEventListener('mousedown', mouseDownContainer);
    trash.addEventListener('mousedown', clickTrash);

    const cleanup = () => {
      target.removeEventListener('mousedown', mouseDown);
      container.removeEventListener('mousedown', mouseDownContainer);
      trash.removeEventListener('mousedown', clickTrash);
    };

    return cleanup;
  }, [id, deleteItem]);
}

export default useDragger;
