import { create } from "zustand";

type CommandMenuState = {
  isCommandMenuOpen: boolean;
};

type CommandMenuActions = {
  setIsCommandMenuOpen: (isCommandMenuOpen: boolean) => void;
};

type CommandMenuStore = CommandMenuState & CommandMenuActions;

const useCommandStore = create<CommandMenuStore>()((set) => ({
  isCommandMenuOpen: false,
  setIsCommandMenuOpen: (isCommandMenuOpen) => set({ isCommandMenuOpen }),
}));

export default useCommandStore;
