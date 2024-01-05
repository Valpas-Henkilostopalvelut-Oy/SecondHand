/*public class BaseEntity
    {
        public Guid Id { get; set; }
        public required DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
        public required bool IsDeleted { get; set; }
        public DateTime DeletedAt { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid LastModifiedBy { get; set; }
        public Guid DeletedBy { get; set; }
        public required byte[] RowVersion { get; set; }
        public required int Version { get; set; }
    }
}*/

interface BaseType {
  id: string;
  createdAt: string | null | undefined;
  lastModifiedAt?: string | null | undefined;
  isDeleted?: boolean;
  deletedAt?: string | null | undefined;
  createdBy?: string | null | undefined;
  lastModifiedBy?: string | null | undefined;
  deletedBy?: string | null | undefined;
  rowVersion?: string | null | undefined;
  version: number;
}

export default BaseType;
