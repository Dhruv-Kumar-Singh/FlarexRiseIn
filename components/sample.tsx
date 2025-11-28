"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useFitnessContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const [scoreInput, setScoreInput] = useState("")

  const { data, actions, state } = useFitnessContract()

  const handleSetScore = async () => {
    if (!scoreInput) return
    try {
      await actions.setScore(scoreInput)
      setScoreInput("")
    } catch (err) {
      console.error("Error:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Fitness Score</h2>
          <p className="text-muted-foreground">Please connect your wallet to interact with the contract.</p>
        </div>
      </div>
    )
  }

  const canSubmit = scoreInput !== "" && Number(scoreInput) >= 0

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Fitness Score Tracker</h1>
          <p className="text-muted-foreground text-sm mt-1">Update and view your on-chain fitness score</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Your Score</p>
            <p className="text-2xl font-semibold text-foreground">{data.myScore}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Set New Score</label>
            <input
              type="number"
              placeholder="Enter score"
              value={scoreInput}
              onChange={(e) => setScoreInput(e.target.value)}
              min="0"
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            onClick={handleSetScore}
            disabled={!canSubmit || state.isLoading || state.isPending}
            className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {state.isLoading || state.isPending ? "Updating..." : "Update Score"}
          </button>

          {state.hash && (
            <div className="mt-6 p-4 bg-card border border-border rounded-lg">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Transaction Hash</p>
              <p className="text-sm font-mono text-foreground break-all mb-3">{state.hash}</p>
              {state.isConfirming && <p className="text-sm text-primary">Waiting for confirmation...</p>}
              {state.isConfirmed && <p className="text-sm text-green-500">Transaction confirmed!</p>}
            </div>
          )}

          {state.error && (
            <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
              <p className="text-sm text-destructive-foreground">Error: {state.error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SampleIntregation
