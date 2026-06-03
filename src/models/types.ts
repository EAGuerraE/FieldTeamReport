export type ItemType='RFI'|'NC'|'PLI'|'OBS'|'HAZ'|'NM'|'INC'|'ACC'|'ACT'|'INS'|'FOT'|'VID'|'DOC';
export type UserRole='Admin'|'Project Manager'|'QAQC'|'HSE'|'Inspector'|'Contractor'|'Client'|'Viewer';
export interface User{id:string;display_name:string;email:string;role:UserRole;company:string;color?:string}
export interface Group{id:string;name:string;description?:string;project_code?:string;group_type:string;created_by:string;created_at:string;status:string;color?:string}
export interface Drawing{id:string;group_id:string;drawing_number:string;drawing_title:string;revision:string;expected_file_name?:string;expected_hash?:string;status:string}
export interface LocalPdfLink{id:string;drawing_id:string;user_id:string;file_name:string;file_size:number;file_last_modified:number;local_status:'Missing'|'Linked'|'Verified'|'Hash Mismatch'|'Needs Relink';storage_mode:'file-handle'|'imported-blob'|'temporary-selection';linked_at:string}
export interface FieldItem{id:string;group_id:string;item_number:string;item_type:ItemType;title:string;description:string;status:string;priority:string;severity?:string;responsible_user_id?:string;created_by:string;created_at:string;updated_at:string;due_date?:string;has_pdf_reference:boolean;has_droppin:boolean;is_general_item:boolean}
export interface ItemComment{id:string;item_id:string;group_id:string;comment_text:string;created_by:string;created_at:string;updated_at?:string}
export interface Attachment{id:string;group_id:string;item_id?:string;comment_id?:string;attachment_type:'FOT'|'VID'|'DOC'|'AUD'|'PDF'|'OTHER';file_name:string;mime_type:string;file_size:number;created_by:string;created_at:string}
export interface DropPin{id:string;group_id:string;drawing_id:string;drawing_revision:string;page_number:number;x_percent:number;y_percent:number;created_by:string;created_at:string}
export interface FieldItemDropPinLink{id:string;item_id:string;droppin_id:string;drawing_id:string;page_number:number;created_at:string}
export interface AuditLog{id:string;entity_type:string;entity_id:string;action:string;old_value?:string;new_value?:string;user_id:string;timestamp:string}
