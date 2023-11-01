import {create} from 'zustand'

const useOptions = create((set) => ({
    timeWork:     0,
    timeRest:     0,
    rounds:       0,
    currentRound: 1,
    isWork:       false,
    isRest:       false,
    start:        false,
    isFinish:     false,
    isLast:       false,
    isLastWork:    false,
    isLastRest:    false,


    setTimeWork:        (n) => set(() => ({timeWork:     n       })),
    setTimeRest:        (n) => set(() => ({timeRest:     n       })),
    setRounds:          (n) => set(() => ({rounds:       n       })),
    setRoundsPlus :     (n) => set(() => ({currentRound: n       })),
    setRoundsRestart:   ()  => set(() => ({rounds:       0       })),
    setCurrentRound:    (n) => set(() => ({currentRound: n       })),
    setStartTrue:       ()  => set(() => ({start:        true    })),
    setStartFalse:      ()  => set(() => ({start:        false   })),
    setIsWorkTrue:      ()  => set(() => ({isWork:       true    })),
    setIsWorkFalse:     ()  => set(() => ({isWork:       false   })),
    setIsRestTrue:      ()  => set(() => ({isRest:       true    })),
    setIsRestFalse:     ()  => set(() => ({isRest:       false   })),
    setFinishTrue:      ()  => set(() => ({isFinish:     true    })),
    setFinishFalse:     ()  => set(() => ({isFinish:     false   })),
    setIsWorkRestart:   ()  => set(() => ({isWork:       false   })),
    setIsRestRestart:   ()  => set(() => ({isRest:       false   })),
    setIsLastTrue:      ()  => set(() => ({isLast:       true    })),
    setIsLastFalse:     ()  => set(() => ({isLast:       false   })),
    setIsLastWorktrue:  ()  => set(() => ({isLastWork:   true    })),
    setIsLastWorkFalse: ()  => set(() => ({isLastWork:   false   })),
    setIsLastRestTrue:  ()  => set(() => ({isLastRest:   true    })),
    setIsLastRestFalse: ()  => set(() => ({isLastRest:   false   })),


}))

export default useOptions

