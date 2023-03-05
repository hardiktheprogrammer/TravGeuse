import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Backend } from "../target/types/backend";

describe("Backend", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Backend as Program<Backend>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
