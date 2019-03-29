# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_version ">= 2.1"

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  required_plugins = %w(vagrant-vbguest)

  # Install plugins if missing
  plugins_to_install = required_plugins.select {|plugin| not Vagrant.has_plugin? plugin}
  if plugins_to_install.any?
    puts "Installing plugins: #{plugins_to_install.join(' ')}"
    if system "vagrant plugin install #{plugins_to_install.join(' ')}"
      exec "vagrant #{ARGV.join(' ')}"
    else
      abort "Installation of one or more plugins has failed. Aborting."
    end
  end

  # Set auto_update to false, if you do NOT want to check the correct additions version when booting VM's
  if Vagrant.has_plugin?("vagrant-vbguest")
    config.vbguest.auto_update = false
  end

  config.vm.define "node-simple-rest-api", primary: true do |vm_config|
    vm_config.vm.box = "ubuntu/bionic64"
    vm_config.vm.box_check_update = true
    vm_config.vm.network "private_network", ip: "192.168.29.11"
    vm_config.vm.provider "virtualbox" do |vb|
      vb.name = "node-simple-rest-api-VM"
      vb.cpus = 2
      vb.memory = 4096
    end

    vm_config.vm.hostname = "node-simple-rest-api"

    vm_config.ssh.insert_key = false

    vm_config.vm.synced_folder ".", "/vagrant", disabled: true
    vm_config.vm.synced_folder ".", "/var/node-simple-rest-api", create: true

    vm_config.vm.provision "docker"

    vm_config.vm.provision "bootstrap", type: "shell", run: "once", path: "infra/local/provision.sh"
  end
end
