import { create } from 'zustand'
import { Host } from "@prisma/client";


interface Row {
    key: number;
    hostname: string;
    ip: string;
    os: string;
}

export interface AnsibleOutputType {
    ip: string;
    playbookName: string;
    output: string;
}

export interface PlaybookParametersType {
  id: number;
  playbook: string;
}

interface HubState {
    linuxHosts: Host [];
    getLinuxHosts: () => void;

    windowsHosts: Host [];
    getWindowsHosts: () => void;

    // linuxPlaybooks: Playbooks[];
    // getLinuxPlaybooks: () => void;

    // windowsPlaybooks: Playbooks[];
    // getWindowsPlaybooks: () => void;

    selectedKeysLinuxPlaybooks: Set<number>;
    setSelectedKeysLinuxPlaybooks: (keys: Set<number>) => void;

    selectedKeysLinuxHosts: Set<number>;
    setSelectedKeysLinuxHosts: (keys: Set<number>) => void;

    selectedKeysWindowsPlaybooks: Set<number>;
    setSelectedKeysWindowsPlaybooks: (keys: Set<number>) => void;

    selectedKeysWindowsHosts: Set<number>;
    setSelectedKeysWindowsHosts: (keys: Set<number>) => void;

    ansibleOutput: AnsibleOutputType[];
    addAnsibleOutput: (output: AnsibleOutputType[]) => void;

    isAnsibleModalOpen: boolean;
    openAnsibleModal: () => void;
    closeAnsibleModal: () => void;

    isParameterModalOpen: boolean;
    openParameterModal: () => void;
    closeParameterModal: () => void;

    parameterizedPlaybooks: PlaybookParametersType[];
    addParameterizedPlaybooks: (output: PlaybookParametersType[]) => void;

}

const { signal } = new AbortController();

export const useScriptingHubStore = create<HubState>((set) => ({
    linuxHosts: [],
    getLinuxHosts: () => {
        fetch('/api/v1/get/linuxHosts', { next: { revalidate: 10 }, cache: 'no-store', signal })
            .then(res => res.json())
            .then(data => {
                set({ linuxHosts: data })
            })
    },

    windowsHosts: [],
    getWindowsHosts: () => {
        fetch('/api/v1/get/windowsHosts', { next: { revalidate: 10 }, cache: 'no-store', signal })
            .then(res => res.json())
            .then(data => {
                set({ windowsHosts: data })
            })
    },  

    // linuxPlaybooks: [],
    // getLinuxPlaybooks: () => {
    //     fetch('/api/playbooks?os=linux')
    //         .then(res => res.json())
    //         .then(data => {
    //             set({ linuxPlaybooks: data })
    //         })
    // },

    // windowsPlaybooks: [],
    // getWindowsPlaybooks: () => {
    //     fetch('/api/playbooks?os=windows')
    //         .then(res => res.json())
    //         .then(data => {
    //             set({ windowsPlaybooks: data })
    //         })
    // },

    selectedKeysLinuxPlaybooks: new Set([]),
    setSelectedKeysLinuxPlaybooks: (keys: Set<number>) => set({ selectedKeysLinuxPlaybooks: keys }),

    selectedKeysLinuxHosts: new Set([]),
    setSelectedKeysLinuxHosts: (keys: Set<number>) => set({ selectedKeysLinuxHosts: keys }),

    selectedKeysWindowsPlaybooks: new Set([]),
    setSelectedKeysWindowsPlaybooks: (keys: Set<number>) => set({ selectedKeysWindowsPlaybooks: keys }),

    selectedKeysWindowsHosts: new Set([]),
    setSelectedKeysWindowsHosts: (keys: Set<number>) => set({ selectedKeysWindowsHosts: keys }),

    ansibleOutput: [],
    addAnsibleOutput: (output: AnsibleOutputType[]) => {

        // set is a function that gives the current state of an element and returns the new one
        set({
            // here I am setting ansibleOutput to the value of the parameter that gets passed
            ansibleOutput: output
        })
    },

    isAnsibleModalOpen: false,
    openAnsibleModal: () => set({ isAnsibleModalOpen: true }),
    closeAnsibleModal: () => set({ isAnsibleModalOpen: false }),

    isParameterModalOpen: false,
    openParameterModal: () => set({ isParameterModalOpen: true }),
    closeParameterModal: () => set({ isParameterModalOpen: false }),

    parameterizedPlaybooks: [],
    addParameterizedPlaybooks: (parameterizedPlaybooks: PlaybookParametersType[]) => {

        // set is a function that gives the current state of an element and returns the new one
        set({
            // here I am setting ansibleOutput to the value of the parameter that gets passed
            parameterizedPlaybooks: parameterizedPlaybooks
        })
    },
    


}));