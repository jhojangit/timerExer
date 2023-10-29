import {create} from 'zustand'

const useOptions = create((set) => ({
    timeWork: 0,
    timeRest: 0,
    rounds:   0,
    isWork:   false,
    isRest:   false,
    start:    false,

    setTimeWork:   (n) => set(() => ({timeWork: n           })),
    setTimeRest:   (n) => set(() => ({timeRest: n           })),
    setRounds:     (n) => set(() => ({rounds:   n           })),
    setRoundsMinus:(n) => set(() => ({rounds:   n           })),
    setStartTrue:  ()  => set(() => ({start:    true        })),
    setStartFalse: ()  => set(() => ({start:    false       })),
    setIsWorkTrue: ()  => set(() => ({isWork:   true        })),
    setIsWorkFalse:()  => set(() => ({isWork:   false       })),
    setIsRestTrue: ()  => set(() => ({isRest:   true        })),
    setIsRestFalse:()  => set(() => ({isRest:   false       })),
    setFinish:     ()  => set(() => ({rounds:   0           })),
    setFinish:     ()  => set(() => ({isRest:   false       })),
    setFinish:     ()  => set(() => ({isWork:   false       })),
    setFinish:     ()  => set(() => ({start:    false       })),
}))

export default useOptions

