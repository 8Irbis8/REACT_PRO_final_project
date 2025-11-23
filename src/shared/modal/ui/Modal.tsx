import CloseSvg from '@/shared/assets/icons/close.svg?react';
import IconButton from '@mui/material/IconButton';
import { memo, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

export const Modal: React.FC<ModalProps> = memo(
  ({ isOpen, onClose, children, title, closeOnOverlayClick = true, closeOnEsc = true }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousActiveElement = useRef<Element | null>(null);
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
      const root = document.getElementById('modal-root');
      setModalRoot(root);

      if (!root) {
        console.warn('Modal root not found');
      }
    }, []);

    useEffect(() => {
      if (!isOpen || !closeOnEsc) return;

      const handleDocumentKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          onClose();
        }
      };

      document.addEventListener('keydown', handleDocumentKeyDown);
      return () => {
        document.removeEventListener('keydown', handleDocumentKeyDown);
      };
    }, [isOpen, closeOnEsc, onClose]);

    useEffect(() => {
      if (!isOpen || !closeOnOverlayClick) return;

      const handleClickOutside = (event: MouseEvent): void => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, closeOnOverlayClick, onClose]);

    useEffect(() => {
      if (isOpen) {
        previousActiveElement.current = document.activeElement;

        // Устанавливаем фокус на кнопку закрытия после рендера
        const focusTimer = requestAnimationFrame(() => {
          closeButtonRef.current?.focus();
        });

        // Убираем скролл
        document.body.style.overflow = 'hidden';

        return () => {
          cancelAnimationFrame(focusTimer);
          document.body.style.overflow = 'unset';
        };
      } else {
        // Восстанавливаем скролл
        document.body.style.overflow = 'unset';
      }
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen && previousActiveElement.current) {
        (previousActiveElement.current as HTMLElement)?.focus();
      }
    }, [isOpen]);

    if (!isOpen || !modalRoot) {
      return null;
    }

    return createPortal(
      <div className={styles.overlay}>
        <div
          ref={modalRef}
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          tabIndex={-1}
        >
          <div className={styles.header}>
            {title && (
              <h2 id="modal-title" className={styles.title}>
                {title}
              </h2>
            )}
            <IconButton
              ref={closeButtonRef}
              size="small"
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Закрыть"
            >
              <CloseSvg />
            </IconButton>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>,
      modalRoot,
    );
  },
);

Modal.displayName = 'Modal';
