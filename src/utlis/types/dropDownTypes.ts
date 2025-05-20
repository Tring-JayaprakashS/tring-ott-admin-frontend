export type Project = { id: string; name: string };
export type SingleSelectDropdownProps = {
  label?: string;
  placeholder?: string;
  selected: Project | null;
  options: Project[];
  onSelect: (project: Project) => void;
  isOpen: boolean;
  toggleDropdown: () => void;
  clickOutside: () => void;
};
